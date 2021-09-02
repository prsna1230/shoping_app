import React from 'react'

function Home() {
    return (
        <div className="container">
            {/* carousel-content */}
            <div className="carousel slide mt-2" data-bs-ride="carousel" id="cr">
            <div className="carousel-indicators">
                <button data-bs-target="#cr" data-bs-slide-to="0" className="active"></button>
                <button data-bs-target="#cr" data-bs-slide-to="1"></button>
                <button data-bs-target="#cr" data-bs-slide-to="2"></button>
                <button data-bs-target="#cr" data-bs-slide-to="3"></button>
            </div>
            <div className="carousel-inner" data-bs-interval="1000">
                <div className="carousel-item active">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/18/26e60331-07d7-49f5-ae06-b1282fc1b5501629300506439-Desktop-Main-Banner-Revised.gif" alt="" width="100%" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/6fe7489e-8300-46f9-9ae2-6b02d42f65b01629208170398-SportsShoes_Dk.jpg" alt="" width="100%" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/497f8595-8ff5-4f17-a349-e5d9e4d8dbe51629207922898-DK_Kidswear--2-.jpg" alt="" width="100%" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/d7f67601-9c65-4556-8e8d-cf2417d261fa1629208024245-Dresses_Dk.jpg" alt="" width="100%" />
                </div>
            </div>
            <button className="carousel-control-prev" data-bs-target="#cr" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cr"  data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
        <br />
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/20/0b73c658-9cba-4ab3-bbd5-ba6fe74a0f291629468880666-Bank-Offer-Desktop.jpg" alt="" className="w-100" />
        <h3 className="text-center text-dark fw-bold heading mt-4">||----------Explore Top Brands----------||</h3>
        {/* cards part */}
        <div className="mt-4 row row-cols-sm-1">
            <div class="row">
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
            </div>
            {/* row-2 */}
            <div class="row mt-3">
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
            </div>

        <h3 className="text-center text-dark fw-bold mt-4 mb-3 heading">||----------TRENDING IN WESTERN WEAR----------||</h3>
        {/* ROW-1 */}
        <div class="row">
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg" alt="" />
                    <div className="card-body">
                        <a href="#" class="btn btn-primary mt-1">Add Cart<i class="fas fa-cart-plus"></i></a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                    </div>
                </div>
            </div>
        {/* ROW-2 */}
        <div class="row mt-3">
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg" alt="" />
                    <div className="card-body">
                        <a href="#" class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/20/d4f5f80c-ee98-49b6-a318-e04246b480581629472423573-Shop-Top-Categories.jpg" alt="" className="w-100" />
        {/* ROW-3 */}
        <div class="row mt-3">
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/18/a8016da6-3ace-48e1-823b-85e8cbe8a3901629227270004-Peter_England.jpg" alt="" />
                    <div className="card-body">
                        <a href="#" class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/18/450976cb-e6d4-4569-9bc9-21eacb2de1021629227269630-AND-_Vero_Moda_-_More.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/18/47b8e8dd-f6b6-4fca-9e37-e7f65f390e8c1629227270067-Roadster-_Mast_-_Harbour.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/18/6047bae1-4f03-4b38-8856-e5f12d17e1531629227269892-Levis-_ONLY_-_Tommy_-_GAP.jpg" alt="" />
                    <div className="card-body">
                        <button class="btn btn-primary mt-1">Add Cart <i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
</div>

        <footer className="mt-4 p-4 bg-light ">
            <ul className="nav justify-content-evenly">
                <li className="nav-item">
                    <a className="nav-link footerText">Conditions of Use & Sale</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link footerText">Privacy Notice</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link footerText">Intrest Based ads</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link footerText">© 1996-2021, Amazon.com, Inc. or its affiliates</a>
                </li>
            </ul>
        </footer>
    </div>
    )
}

export default Home
