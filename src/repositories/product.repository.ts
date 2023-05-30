export const getAllProducts = () => {
    return this.product.find();
};

export const getProductById = (id: string) => {
    return this.product.find({ where: { id } });
};

export const createProduct = (name: string, price: number) => {
    return this.product.create({ name, price });
};

export const updateProduct = (id: string, name: string, price: number) => {
    return this.product.update({ where: { id } }, { name, price });
};

export const deleteProduct = (id: string) => {
    return this.product.delete({ where: { id } });
};