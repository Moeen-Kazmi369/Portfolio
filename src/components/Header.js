const Header = () => {
return (
<section className="Header">
        <div className="mainHeader">
                <div className="headerText" data-aos="fade-down">
                        <h3 className="miniHeadline">--- Introducing</h3>
                        <h2 className="hello">Hello</h2>
                        <h1>I'm  Jessy Walter</h1>
                        <p>
                        Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.
                        </p>
                        <h4 className="btn" data-aos="fade-up">Contact&nbsp; Me</h4> 
                </div>
                <div className="headerImageDiv">
                        <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png" alt='Header Image' />
                        <div className="circle" data-aos="zoom-in"></div>
                        <div className="haederIcon1 headerIcons" data-aos="fade-left">Ai</div>
                        <div className="haederIcon2 headerIcons" data-aos="fade-right">Ps</div>
                        <div className="haederIcon3 headerIcons" data-aos="fade-right">Id</div>
                        <div className="haederIcon4 headerIcons" data-aos="fade-right">Xd</div>
                </div>
        </div>
</section>

)

}

export default Header