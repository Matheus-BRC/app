class ListCategoryService {
    async execute() {
        const category = [ 
            {          
                name: "Matheus",
                email: "matheus@gmail.com",
                admin: false,
                password: "1234"
            }, 
            {          
                name: "Fabio",
                email: "fabio@gmail.com",
                admin: false,
                password: "1234"
            }     
        ];        
        return category;
    }
}

export { ListCategoryService };