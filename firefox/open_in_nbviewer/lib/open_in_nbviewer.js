function nbviewerURL(currentURL) {
    var url_root = 'http://nbviewer.ipython.org/';
    var url = null;
    var path;

    if (currentURL.search(/^https?:\/\/gist\.github\.com\/(?:\w+\/)?[a-f0-9]+$/) !== -1) {
        var gist = currentURL.match(/^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/);
        url = url_root + gist[1];

    } else if (currentURL.search(/^https:\/\/.*\.ipynb$/) !== -1) {
        path = currentURL.match(/^https:\/\/(.*\.ipynb)$/);
        url = url_root + 'urls/' + path[1];

    } else if (currentURL.search(/^http:\/\/.*\.ipynb$/) !== -1) {
        path = currentURL.match(/^http:\/\/(.*\.ipynb)$/);
        url = url_root + 'url/' + path[1];
    }

    return url;
}

exports.nbviewerURL = nbviewerURL;
