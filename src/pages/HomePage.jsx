import { Suspense } from "react";
import ProductList from "@containers/productList";

export default function HomePage(){
    return (
        <Suspense delayMs={2} fallback={<div>cargando</div>}>
            
            <ProductList/>
        </Suspense>
    )
}