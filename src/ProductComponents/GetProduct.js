import React from 'react';
import { useEffect, useContext, useState } from 'react';
import ProdNoContext from '../context/ProdNoContext';
import $ from 'jquery';
import axios from 'axios';

const GetProduct = () => {
    const productContext = useContext(ProdNoContext);
    const logonUser = (JSON.parse(window.sessionStorage.getItem("logonUser")) || {userId:null,role:null});
    console.log("세션 확인: "+logonUser.userId);

    useEffect( ()=>{
        console.log("GetProduct.useEffect");
        productGet();
    },[]); 

    const productGet = async ()=> {
        try {
            console.log("axios get 보내기전 prodNo: "+ JSON.stringify(productContext.prodNo));
            axios.get("http://192.168.0.56:8080/product/rest/getProduct?prodNo="+productContext.prodNo)
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    let product = response.data;

                    var strRegDate = new Date(product.regDate);
					strRegDate = strRegDate.getFullYear() + '-' + strRegDate.getMonth() + '-' + strRegDate.getDate();
							

                    $('#prodImage').attr("src", "http://192.168.0.56:8080/images/uploadFiles/"+product.fileName);
                    $('.prodName').text(product.prodName);
                    $('.prodDetail').text(product.prodDetail);

                    $($('.prodInfo')[0]).text("가격 "+product.price+" ₩");
                    $($('.prodInfo')[1]).text("제조일자 20"+ product.manuDate.substring(0, 2) + "년 " + product.manuDate.substring(2, 4) +"월 "+product.manuDate.substring(4, 6)+"일");
                    $($('.prodInfo')[2]).text("등록일자 "+strRegDate);

                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div class="container">
                <div class="row mb-4 align-items-center">
                    <div class="col-md-6" data-aos="fade-up">
                        <h2 className='prodName'>상품명</h2>
                        <p className='prodDetail'>상품에 대한 설명이 담겨 있습니다...</p>
                    </div>
                </div>
            </div>

            <div class="site-section pb-0">
                <div class="container">
                    <div class="row align-items-stretch">
                        <div class="col-md-8" data-aos="fade-up">
                            <img id='prodImage' src="" alt="Image" class="img-fluid"/>
                        </div>
                        <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
                            <div class="sticky-content">
                                <h3 className="h3 prodName">상품명</h3>
                                <p class="mb-4"><span class="text-muted">product Details</span></p>

                                <div class="mb-5">
                                    <p className='prodDetail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora.</p>
                                </div>

                                <h4 class="h4 mb-3">Product Details</h4>
                                <ul class="list-unstyled list-line mb-5">
                                    <li className='prodInfo'>Design</li>
                                    <li className='prodInfo'>HTML5/CSS3</li>
                                    <li className='prodInfo'>CMS</li>
                                </ul>

                                <p><a href={"http://192.168.0.56:8080/purchase/react/addPurchaseView?prodNo="+productContext.prodNo+"&userId="+logonUser.userId} class="readmore">구매하기</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p></p>
        </div>

        
    );
};

export default GetProduct;