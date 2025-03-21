import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { updateOrderToPaid } from "@/lib/actions/order.actions";

export async function POST(req: NextRequest) {
  // Build the webhook event
  const event = await Stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get("stripe-signature") as string,
    process.env.STRIPE_WEBHOOK_SECRET as string
  );

  // Check for successful payment
  if (event.type === "charge.succeeded") {
    const { object } = event.data;

    // Update order status
    await updateOrderToPaid({
      orderId: object.metadata.orderId,
      paymentResult: {
        id: object.id,
        status: "COMPLETED",
        email_address: object.billing_details.email!,
        pricePaid: (object.amount / 100).toFixed(),
      },
    });

    return NextResponse.json({
      message: "updateOrderToPaid was successful",
    });
  }

  return NextResponse.json({
    message: "event is not charge.succeeded",
  });
}

//!Webhooklar sadece production ortamında geçerli olur, yani localhostta çalışmazlar. Bu yüzden stripe webhook test etmek için stripe içerisindeki webhook bölümünü kullanabiliriz ve bunu verceldeki live app domaini üzerinde yapabiliriz.
//!Add an endpointi seçip https://trendshop.vercel.app  ve dosya yolunu izleyerek olusturduğumuz /api/webhooks/stripe
//! https://trendshop.vercel.app/api/webhooks/stripe
//!daha sonra eventlerden charge.succeeded i seçiyoruz.
//!daha sonra status ekranındayken signing secreti kopyalayıp verceldeki env'e de ekliyoruz.
//!bunu projemizdeki .env e eklemeye gerek yok zaten localhostta çalışmayacak :)
//!her şey bittikten sonra githuba yükleyip verceli güncelleyerek webhooku test edebiliriz.
