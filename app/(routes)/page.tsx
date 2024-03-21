import getBillboard from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";

const HomePage =async()=>{
    const billboard = await getBillboard("34a457a4-1b45-4d5c-83f6-5172294563af");
    const product = await getProducts({isFeatured:true});
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Feature Products" items={product}/>
            </div>
        </Container>
    )
}

export default HomePage;