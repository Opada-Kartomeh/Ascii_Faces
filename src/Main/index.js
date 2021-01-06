import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';


const GetStart = lazy(() => import('../Pages/getStart/index'));
const Ascii = lazy(() => import('../Pages/ascii/index'));

const AppMain = () => {
    return (
        <React.Fragment>
            <Suspense
                fallback={true}>
                <Route exact path="/" component={GetStart} />
            </Suspense>

            <Suspense
                fallback={true}>
                <Route path="/products" component={Ascii} />
            </Suspense>








        </React.Fragment>
    )
}
export default AppMain;