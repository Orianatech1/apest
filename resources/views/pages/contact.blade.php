@extends('layout.main')
@section('main-content')

<header class="page__header"
    style="background-image: url('{{ asset('wp-content/uploads/2023/02/hero-interior-1.jpg') }}'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
    <div class="container">
        <h1 class="hdg hdg--1" tabindex="0">Contact Us</h1>
    </div>
</header><!-- .page__header -->

<article id="post-128" class="post-128 page type-page status-publish hentry">

    <div id="module_1"
        class="module module--contact-info contact-info--content-left module--interior contact-info--mobile-content-top text--dark">
        <div class="contact-info__background" style="color: #666666; background-color: #ffffff;"></div>
        <div class="container">
            <div class="row">
                <div class="contact-info__wrapper">
                    <div class="contact-info__content">
                        <div class="entry__content" tabindex="0" style="color: #666666">
                            <h3 style="text-align: center;">AP Skin Clinic</h3>
                            <p style="text-align: center;">
                                <a href="" target="_blank" rel="noopener">Camp Pune<br />Camp Pune</a>
                            </p>
                            <p style="text-align: center;">
                                <a href="tel:1234567890" target="_self">1234567890</a>
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

    <div id="module_2" 
        class="module module--form module--interior contact-info--mobile-content-top text--dark"
        style="color: #666666; background-color: #ffffff; background-image: url('{{ asset('wp-content/uploads/2023/05/what-the-hex-gray.jpg') }}'); background-position: center center; background-repeat: repeat; background-size: auto;">
        <div class="container">
            <div class="row">
                <div class="form__flex">
                    <div class="form__content form__content--single" tabindex="0">
                        <div class="form__entry" tabindex="0">
                            <div class="entry__content">
                                <h3 style="text-align: center;">Contact Us</h3>
                            </div>
                        </div>
                        <div class="form__gform form__gform--dark form__gform--default form-labels--visible form-button--left form-input--left">
                            <form method="post" id="contact_form" action="{{ url('/submit-form') }}" novalidate>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</article><!-- #post-## -->

@endsection
