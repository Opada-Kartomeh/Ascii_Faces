import React, { useEffect } from 'react'
import Card from '../../../Layout/Card/index'
import { getProducts, getpreemptively } from '../../../actions/products';
import { getAds, deleteAds } from '../../../actions/ads'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Layout/Loader/loader'
import { useLocation } from 'react-router-dom';
import Modal from '../../../Layout/modal/modal';
import ErrorHandling from '../../../ErrorHandling/errorHandling'
const Products = () => {
    let dispatch = useDispatch();
    let { products, loading, isFinished, isFinishedLoad, errorProducts } = useSelector(state => state.products);
    let { adsSrc, errorAds } = useSelector(state => state.ads);
    let query = null;
    const handleScroll = () => {
        if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) < (document.documentElement.offsetHeight)) return;
        getData();
    }
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    const getData = async () => {
        await dispatch(getProducts(10, query));
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        let timer = setInterval(async () => {
            await dispatch(getpreemptively(10, query));
        }, 20000)
        if (isFinishedLoad === true) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
        
    }, [isFinishedLoad,dispatch,query])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if (isFinished === true) {
            window.removeEventListener('scroll', handleScroll);
        }
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, [isFinished]);

    useEffect(() => {
        if (products.length > 0 && (products.length % 20 === 0))
            dispatch(getAds());
    }, [products, dispatch])
    query = useQuery().get("_sort")
    return (
        <React.Fragment>

            <div className="containerAll" >
                <div className="container">
                    <ErrorHandling error={errorProducts}>
                        {products.map((el, i) => {

                            return (

                                <Card key={i} price={el.price} face={el.face} date={el.date} size={el.size}></Card>
                            )
                        })}
                    </ErrorHandling>

                </div>
                {(loading || isFinished) && <Loader isFinished={isFinished}></Loader>}

            </div>
            <ErrorHandling error={errorAds}>
                {adsSrc !== "" && <Modal close={() => dispatch(deleteAds())} src={adsSrc} />}
            </ErrorHandling>
        </React.Fragment>
    )

}
export default Products