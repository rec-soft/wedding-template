# Wedding Template

A simple wedding website that is:

* Fast to load.
* Customizable.
* Low dependency.
* No JS.
* Free & ad-free to host.

Because other wedding websites out there miss at least one of the above.

👉 [Demo Website](http://blog.beekley.xyz/wedding-template/) 👈

<!-- ![](header.png) -->

## Installation

This project uses [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [NodeJS](https://nodejs.org/en/download/), so please install those first. I've tried Node v12.16, but others may work too.

Then clone and install the dependencies:

```
git clone https://github.com/beekley/wedding-template.git
npm install
```

## Building the Website

The following command will build a sample version of the website:

```
npm run build-sample
```

To customize, create a `config.real.js` [1] at the root directory of the project, edit it, and build:

```
cp config.js config.real.js
npm run build
```

See the comments in `config.js` for API documentation.

[1] _Note that this file is not checked in because it may contain sensitive data about your wedding._

### Making Template Changes

This website is not modularly configurable. If you wish to make changes to the layout, edit the [pug](https://pugjs.org/api/getting-started.html) templates defined in `templates/`.

## Publishing the Website

An easy way to publish the website is to use [Github Pages](https://pages.github.com). Please refer to their documentation for more information.

I host my website using GCP since it is free (at my use levels) while Github Pages requires a subscription for private repos. To do this, follow [these steps in GCP's documentation](https://cloud.google.com/storage/docs/hosting-static-website). To upload local files, run:

```
BUCKET_NAME={your bucket name} npm run upload
```

I'm sure there is a similar solution using AWS/Azure/etc.

## Release History

* 1.0.0
    * CHANGE: Initial release

## Meta

Please use and modify as you wish (according to the [license](LICENSE)). I'd love to see what y'all make with it-- if you're up for it, [email me](https://github.com/beekley) a link to your finished website.
