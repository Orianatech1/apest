@extends('layout.main')
@section('main-content')

<header class="page__header"
    style="background-image: url('{{ asset('wp-content/uploads/2023/02/hero-interior-1.jpg') }}');background-position: center center;background-repeat: no-repeat;background-size: cover;">
    <div class="container">
        <h1 class="hdg hdg--1" tabindex="0">Medspa Services</h1>
    </div>
</header><!-- .page__header -->

<article id="post-434" class="post-434 page type-page status-publish hentry">

    <div id="module_1" class="module module--services module--interior text--dark" style="color: #252525;background-color: #FFFFFF;">
        <div class="container">
            <div class="services__flex services__flex--single">
                <div class="services__content entry__content">
                    <h2>Comprehensive Skincare Services</h2>
                </div>
                <div class="services">

                    <div id="service-1" class="service service--3">
                        <a class="service__item" href="facial-services/index.html" title="Facial Services">
                            <div class="service__image">
                                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="{{ asset('wp-content/uploads/2023/03/SkinLuxe-image.jpg') }}" alt="SkinLuxe-image">
                            </div>
                            <h5 class="service__title">Facials</h5>
                            <div class="service__content">
                                <p>Clinical facials can revitalize your face better than non-clinical options, and our facility has the equipment needed to do the job.</p>
                            </div>
                        </a>
                    </div>

                    <div id="service-2" class="service service--3">
                        <a class="service__item" href="aesthetic-services/index.html" title="Aesthetic Services">
                            <div class="service__image">
                                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="{{ asset('wp-content/uploads/2023/03/services2.jpg') }}" alt="services2">
                            </div>
                            <h5 class="service__title">Injectables</h5>
                            <div class="service__content">
                                <p>Injectables such as BOTOX® and JUVÉDERM® are an effective and non-invasive technique to restore fullness to your face and reduce lines. They also treat acne, sun damage, and skin growth.</p>
                            </div>
                        </a>
                    </div>

                    <div id="service-3" class="service service--3">
                        <a class="service__item" href="skin-rejuvenation/index.html" title="Aesthetic Services">
                            <div class="service__image">
                                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="{{ asset('wp-content/uploads/2023/03/services3.jpg') }}" alt="services3">
                            </div>
                            <h5 class="service__title">Skin Rejuvenation + Laser</h5>
                            <div class="service__content">
                                <p>Our skin rejuvenation procedures use lasers and other equipment to achieve what was impossible before modern rejuvenation techniques.</p>
                            </div>
                        </a>
                    </div>
                </div><!-- /services -->
            </div>
        </div>
    </div>

    <div id="module_2" class="module--content-area content-area--single rl-cta text--light"
        style="padding-top: 20px;padding-bottom: 20px;color: #ffffff;background-image: url('{{ asset('wp-content/uploads/2023/01/CTA_Interior.jpg') }}');background-position: center center;background-repeat: no-repeat;background-size: cover;">
        <div class="container">
            <div class="row">
                <div class="content-area__flex content-area__flex--image-center">

                    <div class="content-area__content content--medium content--centered text--light">
                        <div class="entry__content" tabindex="0">
                            <h3>Book an Appointment Today</h3>
                        </div>

                        <div class="content-area__button content-area__button--light">
                            <a class="btn btn--light" href="tel:1234567890">Call Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</article><!-- #post-## -->
@endsection
