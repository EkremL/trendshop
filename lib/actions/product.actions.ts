"use server";
// import { PrismaClient } from "@prisma/client";before serverless adapters
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

//!get (all) latest products
export async function getLatestProducts() {
  // const prisma = new PrismaClient(); before serverless adapters

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT, //limit
    orderBy: { createdAt: "desc" }, //sort by creation date in descending order
  });

  return convertToPlainObject(data);
}

//!get single product

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
