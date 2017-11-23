# Source of the TouIST homepage

This is the official homepage for the TouIST project. To edit the homepage,
feel free to go to https://github.com/touist/touist.github.io and submit a
pull-request.

The URL https://touist.github.io is a mirror and should not be used for official
links to the TouIST project. Instead, use https://www.irit.fr/touist.

# To edit index.mdk

1. install `npm install -g madoko madoko-local`
2. clone this project, for example

       git clone https://github.com/touist/touist.github.io

3. launch the madoko local server; it is going to open the web editor. Make
   sure you launch it from inside the cloned directory.

       madoko-local --port 8080 --run -l .

4. in the web editor, Open -> Local Disk -> open the file `index.mdk`.

If you don't have texlive-2017 (or above), uncomment 'Math Mode: mathjax'
in `index.mdk`:

    Math Mode: mathjax

You can eventually commit, fork and open a pull request.