@extends('layout.main')

@section('main-content')
<div id="module_1" class="module module--hero module--home">
    <div class="hero__container" data-autoplay="off">
        <div class="hero__panel-wrapper">
            <div class="hero__panel hero__panel--left hero__panel--parallax_all hero-panel-0 text--light"
                style="color: #ffffff; background: transparent;"
                data-mobile="{{ asset('wp-content/uploads/2023/01/hero-mobile.jpg') }}"
                data-desktop="{{ asset('wp-content/uploads/2023/01/hero-web.jpg') }}">
                <div class="jarallax">
                    <img class="jarallax-img" 
                         data-src="{{ asset('wp-content/uploads/2023/01/hero-web.jpg') }}" 
                         data-mobile="{{ asset('wp-content/uploads/2023/01/hero-mobile.jpg') }}">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 hero__content entry__content">
                            <h1>Expert Hair & Skin Care in MG Road,Pune</h1>
                            <div class="hero__button hero__button--light">
                                <a class="btn btn--light" href="#" target="_blank">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="module_2" class="module--content-area content-area--cover content-area--single text--dark" 
     style="padding-top: 20px; padding-bottom: 20px; color: #252525; background-color: #FFFFFF;">
    <div class="container">
        <div class="row">
            <div class="content-area__flex content-area__flex--image-center">
                <div class="content-area__content content--medium content--centered text--dark">
                    <div class="entry__content" tabindex="0">
                        <h2>Discover Effortless hair & Skin Wellness</h2>
                        <p>
                            At AP aesthetic, we bring an integrated approach to skincare – combining 
                            advanced skin diagnostics, signature facial and aesthetic treatments, overseen 
                            by a board-certified dermatologist, Dr. Adity, and state-of-the-art clinical skincare, 
                            all personalized by our skin experts for your unique needs.
                        </p>
                        <p>
                            We want to be your go-to destination for brighter, healthier-looking skin 
                            in under an hour.
                        </p>
                    </div>
                    <div class="content-area__button content-area__button--dark">
                        <a class="btn btn--dark" href="#" target="_blank">Schedule a Consultation</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Module 3 -->
<div id="module_3" class="module--content-area content-area--auto content-area--image-right text--dark" 
     style="padding-top: 0px; padding-bottom: 0px; color: #252525; background-color: #f7f7f7; 
            background-image: url('{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}'); 
            background-position: center center; background-repeat: repeat; background-size: auto;" 
     data-mobile="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}" 
     data-desktop="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}">
    <div class="container">
        <div class="row">
            <div class="content-area__flex content-area__flex--image-center">
                <div class="content-area__image content-area__image--full-width">
                    <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                         data-src="{{ asset('wp-content/uploads/2023/02/620a6c6da1451f0013650279-v2.jpg') }}" 
                         alt="scope">
                </div>
                <div class="content-area__content content--medium content--left text--dark">
                    <div class="entry__content" tabindex="0">
                        <h3>Complimentary Skin Consultation</h3>
                        <p>
                            We use SkinScope LED to perform essential consultations. This diagnostic tool helps determine 
                            which underlying skin issues exist before they begin causing problems. The machine uses two 
                            light modes to assess your skin. First, we use the simulated daylight mode to reveal visible 
                            concerns. The LED-UV light mode is how we find underlying skin damage. Once finished with the 
                            consultation, we can begin crafting a customized plan for you.
                        </p>
                    </div>
                    <div class="content-area__button content-area__button--dark">
                        <a class="btn btn--dark" href="#" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Module 4 -->
<div id="module_4" class="module module--services module--home text--dark" 
     style="color: #252525; background-color: #ffffff;">
    <div class="container">
        <div class="services__flex services__flex--single">
            <div class="services__content entry__content">
                <h3 style="text-align: center;">Our Treatments</h3>
                <p style="text-align: center;">
                    At SkinLab Pune by AP Skin Clinic, we know skin. Our team of skin experts, overseen by 
                    board-certified dermatologist Dr. Alicia Barba, are trained to provide facials, signature 
                    skin treatments, and minimally invasive aesthetic services which meet the needs of every 
                    skin type. Our services are crafted to deliver the results you are looking for in under 
                    an hour so you can get in, get out, and get on with your day. Our comprehensive skin care 
                    services include:
                </p>
            </div>
            <div class="services">
                <!-- Service 1 -->
                <div id="service-1" class="service service--3">
                    <a class="service__item" href="#" title="Facial Services">
                        <div class="service__image">
                            <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                                 data-src="{{ asset('wp-content/uploads/2023/03/SkinLuxe-image.jpg') }}" 
                                 alt="SkinLuxe-image">
                        </div>
                        <h5 class="service__title">Signature Facials and Peels</h5>
                        <div class="service__content">
                            <p>SkinCeuticals signature treatments, Barba signature facials, and chemical peels are 
                               designed to address your top skin concerns.</p>
                        </div>
                    </a>
                </div>
                <!-- Service 2 -->
                <div id="service-2" class="service service--3">
                    <a class="service__item" href="#" title="Aesthetic Services">
                        <div class="service__image">
                            <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                                 data-src="{{ asset('wp-content/uploads/2023/03/services2.jpg') }}" 
                                 alt="services2">
                        </div>
                        <h5 class="service__title">Injectable Treatments</h5>
                        <div class="service__content">
                            <p>Injectable treatments, such as neurotoxins and dermal fillers, are effective and 
                               minimally-invasive techniques to restore fullness to your face and reduce wrinkles 
                               and fine lines.</p>
                        </div>
                    </a>
                </div>
                <!-- Service 3 -->
                <div id="service-3" class="service service--3">
                    <a class="service__item" href="#" title="Aesthetic Services">
                        <div class="service__image">
                            <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                                 data-src="{{ asset('wp-content/uploads/2023/03/services3.jpg') }}" 
                                 alt="services3">
                        </div>
                        <h5 class="service__title">Skin Rejuvenation Services</h5>
                        <div class="service__content">
                            <p>Skin rejuvenation treatments utilize lasers and energy-based devices to improve skin 
                               tone, texture, and firmness.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="services__button services__button--dark">
            <a class="btn btn--dark" href="#" target="_blank">Book Now</a>
        </div>
    </div>
</div>

<!-- Module 5 -->
<div id="module_5" class="module--content-area content-area--auto content-area--image-right text--dark" 
     style="padding-top: 0px; padding-bottom: 0px; color: #252525; background-color: #f7f7f7; 
            background-image: url('{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}'); 
            background-position: center center; background-repeat: repeat; background-size: auto;" 
     data-mobile="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}" 
     data-desktop="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}">
    <div class="container">
        <div class="row">
            <div class="content-area__flex content-area__flex--image-center">
                <div class="content-area__image content-area__image--full-width">
                    <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                         data-src="{{ asset('wp-content/uploads/2023/01/SkinceuticalsMiami-Barba1.jpg') }}" 
                         alt="Dr. Adity">
                </div>
                <div class="content-area__content content--left text--dark">
                    <div class="entry__content" tabindex="0">
                        <h3>About Dr. Adity, M.D.</h3>
                        <p>
                            Dr. Adity received her medical degree from Harvard Medical School and completed her residency 
                            at the University of Pune. Dr. Adity is a Diplomate of the Pune Board of Dermatology and is a 
                            member of such prestigious organizations as the Pune Academy of Dermatology and the Indian 
                            Society for Mohs Surgery.
                        </p>
                        <p>
                            She specializes in both Procedural and Cosmetic Dermatology, and can provide dermatology care 
                            fluently in English, Hindi, Marathi, and other languages.
                        </p>
                    </div>
                    <div class="content-area__button content-area__button--dark">
                        <a class="btn btn--dark" href="#" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Module 6 -->
<div id="module_6" class="module module--list-columns module--list-columns- module--home text--dark" 
     style="padding-top: 50px; padding-bottom: 50px; color: #252525; background-color: #ffffff;">
    <div class="container">
        <div class="row">
            <div class="list-columns__content content--narrow content--centered">
                <div class="entry__content">
                    <h3 style="text-align: center;">Beauty Has Its Perks<br />
                        <strong>Introducing SkinVIP Membership</strong>
                    </h3>
                    <p class="hdg--5" style="text-align: center;">₹ 5999 PER MONTH</p>
                    <p style="text-align: center;">
                        <strong>PLUS, ENJOY THESE SPECIAL #SKINPERKS:</strong><br />
                        10% OFF SkinCeuticals and Dermablend Products<br />
                        10% OFF Injectables, Skin Tightening, and Laser Services
                    </p>
                </div>
            </div>
            <div class="list-columns">
                <!-- Column 1 -->
                <div class="list-column list-column--4">
                    <div class="list-column__content">
                        <div class="list-column__headline">Want the Best Value?</div>
                        <div class="list-column__description">
                            <p>Receive a ₹ 9999 credit when you pre-pay a full year.</p>
                        </div>
                    </div>
                </div>
                <!-- Column 2 -->
                <div class="list-column list-column--4">
                    <div class="list-column__content">
                        <div class="list-column__headline">Can&#039;t Make It In?</div>
                        <div class="list-column__description">
                            <p>Exchange or gift to a friend or family member.</p>
                        </div>
                    </div>
                </div>
                <!-- Column 3 -->
                <div class="list-column list-column--4">
                    <div class="list-column__content">
                        <div class="list-column__headline">Need an Upgrade?</div>
                        <div class="list-column__description">
                            <p>Apply your VIP credit towards another treatment!</p>
                        </div>
                    </div>
                </div>
                <!-- Column 4 -->
                <div class="list-column list-column--4">
                    <div class="list-column__content">
                        <div class="list-column__headline">Pay Monthly?</div>
                        <div class="list-column__description">
                            <p>6-month membership required. For use at SkinLab only.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Module 7 -->
<div id="module_7" class="module--content-area content-area--auto content-area--image-left text--dark" 
     style="padding-top: 0px; padding-bottom: 0px; color: #252525; background-color: #f7f7f7; 
            background-image: url('{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}'); 
            background-position: center center; background-repeat: repeat; background-size: auto;" 
     data-mobile="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}" 
     data-desktop="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}">
    <div class="container">
        <div class="row">
            <div class="content-area__flex content-area__flex--image-center">
                <div class="content-area__image content-area__image--full-width">
                    <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                         data-src="{{ asset('wp-content/uploads/2023/02/SSTK-SkinC-17408-1_w.o_flagship.jpg') }}" 
                         alt="lady getting facial">
                </div>
                <div class="content-area__content content--medium content--left text--dark">
                    <div class="entry__content" tabindex="0">
                        <h3>Why Choose Us?</h3>
                        <p>
                            We believe in making each patient look and feel their best – just as they deserve. 
                            We partnered with SkinCeuticals, ensuring our patients can access state-of-the-art 
                            technology and cutting-edge treatments in a safe environment. For a comprehensive 
                            skincare plan, trust our team. We strive for the highest possible safety, results, 
                            and excellence standards.
                        </p>
                    </div>
                    <div class="content-area__button content-area__button--dark">
                        <a class="btn btn--dark" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Module 8 -->
<div id="module_8" class="module--content-area content-area--parallax content-area--single text--light" 
     style="padding-top: 40px; padding-bottom: 40px; color: #ffffff; background-color: #ffffff; 
            background-image: url('{{ asset('wp-content/uploads/2023/02/bg_module.jpg') }}'); 
            background-position: center center; background-repeat: repeat; background-size: cover;">
    <div class="jarallax">
        <img class="jarallax-img" data-src="{{ asset('wp-content/uploads/2023/02/bg_module.jpg') }}">
    </div>
    <div class="container">
        <div class="row">
            <div class="content-area__flex content-area__flex--image-center">
                <div class="content-area__content content--medium content--centered text--light">
                    <div class="entry__content" tabindex="0">
                        <h3>Discover AP Skin Clinic State-of-the-Art Skincare</h3>
                        <p>
                            Created by Harvard-trained dermatologist Dr. Adity, M.D., AP Skin Clinic offers unparalleled 
                            service with real results. We use state-of-the-art technologies and the finest medical-grade 
                            ingredients, and every treatment program is customized to your specific needs to help you reach 
                            your goals quickly.
                        </p>
                    </div>
                    <div class="content-area__button content-area__button--light">
                        <a class="btn btn--light" href="#" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Module 9 -->
<div id="module_9" class="module--content-area content-area--auto content-area--image-left text--dark" 
     style="padding-top: 0px; padding-bottom: 0px; color: #666666; background-color: #ffffff; 
            background-image: url('{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}'); 
            background-position: center center; background-repeat: repeat; background-size: auto;" 
     data-mobile="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}" 
     data-desktop="{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}">
    <div class="container">
        <div class="row">
            <div class="content-area__flex content-area__flex--image-center">
                <div class="content-area__image content-area__image--full-width">
                    <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                         data-src="{{ asset('wp-content/uploads/2023/03/SkinLab-image.jpg') }}" 
                         alt="people in skin store">
                </div>
                <div class="content-area__content content--left text--dark">
                    <div class="entry__content" tabindex="0">
                        <h3>Skincare Backed by Science</h3>
                        <p>
                            Dr. Adity believes it is important to complement in-office treatments with a 
                            scientifically-proven product line such as SkinCeuticals. As the number one skincare 
                            brand in Pune, Maharashtra for ten years in a row, SkinCeuticals continues to develop and 
                            formulate advanced skincare backed by science.
                        </p>
                    </div>
                    <div class="content-area__button content-area__button--dark">
                        <a class="btn btn--dark" href="#" target="_blank">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Module 10 -->
<div id="module_10" class="module module--contact-info contact-info--content-left module--home contact-info--mobile-content-top text--dark">
    <div class="contact-info__background" style="color: #666666; background-color: #ffffff;"></div>
    <div class="container">
        <div class="row">
            <div class="contact-info__wrapper">
                <div class="contact-info__content">
                    <div class="entry__content" tabindex="0" style="color: #666666;">
                        <h3 style="text-align: center;">AP Aesthetics</h3>
                        <p style="text-align: center;">
                        AP aesthetics 1ST FLOOR, EAST WING, AURORA TOWERS ,<br /> MG ROAD CAMP, PUNE 411001
                        
                        </p>
                        <p style="text-align: center;">
                            <a href="tel:+917599329999" target="_self">75 99 32 9999</a>
                        </p>
                        <p style="text-align: center;">
                            Mon-Fri: 10:00 AM – 7:00 PM<br />
                            Sat: 10:00 AM – 6:00 PM<br />
                            Sun: CLOSED
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection