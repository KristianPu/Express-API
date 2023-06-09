import supertest from 'supertest';
import app from '../app';
import Product, { ProductModel } from '../src/schemas/product.schema';
import { Types } from 'mongoose';
require("../src/schemas/database")
const request = supertest(app);

const mockProduct = {
  _id: "6483277055808f1520a49b18",
  name: "Product", 
  description: "Proizvod", 
  price: 20
};

const mockUpdateProduct = {
  _id: "6483277055808f1520a49b18",
  description: "Description"
}

const mockReview = {
  productId: new Types.ObjectId("6483277055808f1520a49b18"),
  userId: new Types.ObjectId("6483277055808f1520a49b18"),
  rating: 5,
  comment: "Works"
}

const TProduct = {
  __v: expect.any(Number),
  _id: expect.any(String),
  name: expect.any(String),
  description: expect.any(String),
  price: expect.any(Number)
}

describe("PRODUCT", () => {

  const endpoint = "/product";

  it("POST should return status 201", async () => {

    await ProductModel.deleteMany();

    const response = await request.post(endpoint).send(mockProduct);

    expect(response.status).toBe(201);

  })

  it("POST should be product object", async () => {

    await ProductModel.deleteMany();

    const response = await request.post(endpoint).send(mockProduct);

    expect<Product>(response.body).toEqual(TProduct);

  })

  it("GET should return status 200", async () => {

    const response = await request.get(endpoint);

    expect(response.status).toBe(200);

  })

  it("GET should return array of Product objects", async () => {

    const response = await request.get(endpoint);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(TProduct)
      ])
    );

  })

  it("GET /:id should return status 200", async () => {

    const response = await request.get(`${endpoint}/${mockProduct._id}`);

    expect(response.status).toBe(200);

  })

  it("GET /:id should return Product object", async () => {

    const response = await request.get(`${endpoint}/${mockProduct._id}`);

    expect<Product>(response.body).toEqual(TProduct);

  })

  it("PUT should return status 200", async () => {

    const response = await request.put(endpoint).send(mockUpdateProduct);

    expect(response.status).toBe(200);

  })

  it("PUT should update Product object", async () => {

    const response = await request.put(endpoint).send(mockUpdateProduct);

    expect<Product>(response.body).toEqual(TProduct);

  })

  it("POST /reviews should return 201", async () => {

    const response = await request.post(`${endpoint}/reviews`).send(mockReview);

    expect(response.status).toBe(201);

  })

  it("DELETE /:id should return status 204", async () => {

    const response = await request.delete(`${endpoint}/${mockProduct._id}`);

    expect(response.status).toBe(204);

  })

})