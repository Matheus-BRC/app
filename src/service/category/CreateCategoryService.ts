import { ICategoryRequest } from "../../interface/CategoryInterface";

class CreateCategoryService {
    async execute({ id, name, description }: ICategoryRequest){

        if (!name) {
            throw new Error("Name Incorrect");
        }
        
        return { message: "Categoria Incluida com Sucesso"};
    }
}

export { CreateCategoryService };