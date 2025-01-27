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
                            <h3 style="text-align: center;">AP aesthetics</h3>
                            <p style="text-align: center;">
                                <a href="https://maps.app.goo.gl/NiHABrwZX9vNN8ss6" target="_blank" rel="noopener">1ST FLOOR, EAST WING, <br />AURORA TOWERS , MG ROAD CAMP, PUNE 411001</a>
                            </p>
                            <p style="text-align: center;">
                                <a href="tel:+917599329999" target="_self"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> 75 99 32 9999</a>
                            </p>
                            <!-- <p style="text-align: center;">
                                Mon-Fri: 10:00 AM – 7:00 PM<br />
                                Sat: 10:00 AM – 6:00 PM<br />
                                Sun: CLOSED
                            </p> -->
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
