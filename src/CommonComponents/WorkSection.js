import React, { useState, useContext, Component } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import $ from 'jquery';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

const WorkSection = () => {

    let search = {
        currentPage:0,
        searchCondition:null,
        searchKeyword:null,       //위 3개는 프론트에서 바꾸는 것, 아래 3개는 서버에서 온 값을 넣어주는 것.
        pageSize:0,
        endRowNum:0,
        startRowNum:0
    }

    let totalCount = 0;

    const navigate = useNavigate()
    
    useEffect( ()=>{
        console.log("WorkSection.useEffect");
        productListGet();
    },[]); 


    useEffect(() => {
        const handleItemClick = (event) => {
          console.log('클릭된 요소의 prodNo:', event.target.querySelector('input').value);
         navigate("/product/getProduct");
        };
    
        // portfolio-grid의 자식 요소들(동적으로 생성되는 Product들)에게 클릭 이벤트를 할당
        document.getElementById('portfolio-grid').addEventListener('click', handleItemClick);

      }, []); 
    
     

    const readMore = () => {
        console.log("click 더보기");
        productListGet();
    }

    
    const handleClick = name => {
        console.log("hello " + name);
      };


//처음 렌더링 & 더보기버튼 클릭시마다 pageUnit(3)개씩 불러옴.
    const productListGet = async ()=>{

        try{

            if( (totalCount/search.pageSize) < search.currentPage ) return;
            
            search.currentPage++;
            search.searchCondition = $("#searchCondition").val;
            search.searchKeyword = $("#searchKeyword").val;
            console.log("axios POST 보내기전 search: "+ JSON.stringify(search));

            //search를 Stringify해야될지도. 
            axios.post("http://192.168.0.56:8080/product/json/getScrollData", search).then(function (response) {
                console.log(response);
                console.log(response.data);

                var productList = response.data.list;
                var productTranList = response.data.productTranList;
                totalCount = response.data.totalCount;


                for(let i=0 ; i< productList.length ; i++){
							
                    var strDate = new Date( productList[i].regDate);
                    var ImgSrc = "http://192.168.0.56:8080/images/uploadFiles/"+productList[i].fileName;
                    console.log(ImgSrc);
                    strDate = strDate.getFullYear() + '-' + strDate.getMonth() + '-' + strDate.getDate();
                

                    if(productTranList[i]!=null){
                        productList[i].prodName = "SOLD OUT";
                        productList[i].price = 0;
                    }

                    const newRecord = (
                        <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                            <a href='#' val className="item-wrap fancybox">
                                <div className="work-info">
                                    <h3>{productList[i].prodName}</h3>
                                    <span>{productList[i].price}₩</span>
                                    <input type='hidden' value={productList[i].prodNo}></input>
                                </div>  
                                <img className="img-fluid"  src={ImgSrc} />
                            </a>
                        </div>
                    );
                    
                    const newRecordString = ReactDOMServer.renderToString(newRecord);
                    $('#portfolio-grid').append(newRecordString);
                

            }//end of for

            })

        }catch(e){
            console.log(e);
        }
    }


   

    return (
        <div>
            <section class="section site-portfolio">
            <div class="container">
                <div class="row mb-5 align-items-center">
                <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                    <h2 onClick={() => handleClick("donglee") }>Yeji's ALDI</h2>
                    <p class="mb-0">Freelance Creative &amp; Professional Graphics Designer</p>
                </div>

                
                <div class="col-md-12 col-lg-6 text-start text-lg-end" data-aos="fade-up" data-aos-delay="100">
                    <div id="filters" class="filters">
                    <a href="#" data-filter="*" class="active">All</a>
                    <a href="#" data-filter=".grocery">Grocery</a>
                    <a href="#" data-filter=".beauty">Beauty</a>
                    <a href="#" data-filter=".pets">Pets</a>
                    <a href="#" data-filter=".clothing">Clothing</a>
                    </div>

                </div>

                </div>



                <div id="portfolio-grid" class="row no-gutter" data-aos="fade-up" data-aos-delay="200">

                </div>




                <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <form class="form-inline" name="detailForm" action="/product/listProduct?">
  
                        <div class="form-group">
                            <select class="form-control" id="searchCondition" name="searchCondition" >
                                <option value="1" selected >상품명</option>
                                <option value="0" >상품번호</option>
                                <option value="2" >상품가격</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="sr-only" for="searchKeyword"></label>
                            <input type="text" class="form-control" id="searchKeyword" name="searchKeyword"  placeholder="검색어" value={search.searchKeyword} />
                        </div>

                        <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                            <div class="col-md-6 mt-0 form-group">
                                <input type="button" class="readmore d-block w-100" value="검색"/>
                            </div>
                        </div>   

                    </form>
                </div>




                <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <div class="col-md-6 mt-0 form-group">
                        <input type="button" onClick={readMore} class="readmore d-block w-100" value="+ 더보기"/>
                    </div>
                </div>  

                



            </div>
            </section>
        </div>
    );
};

export default WorkSection;