export const Header = () => <h2>This is Header</h2>;

export const Footer = () => <p>This is Footer</p>;

const Hero = () => {
    return (
        <>

            <section>
                <div className="img1 ">
                    <div>
                        <p className="date1">10/04/14 - 10/05/14</p>
                    </div>
                    <div className="text-center mt-3 fs-1 text1">
                        MID SEASON SALE
                    </div>
                    {/* <div className="text2 text-center container">UP TO <b className="text3">50</b>%OFF</div> */}
                    <div class="banner ">
                        <div class="banner-text">
                            <span class="upto">UP TO</span>
                            <span class="fifty">50</span>
                            <span class="off">%OFF</span>
                        </div>
                    </div>
                    <div className="mt-4 fs-4">
                        Mauris commodo nisl eu odio luctus, sed iaculis orci tincidunt. <br /> Suspendisse vulputate luctus.
                    </div>
                    <button type="button" className="p-2 mt-4 btnShop">
                        <a href="" className="text-decoration-none">SHOP NOW</a>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Hero