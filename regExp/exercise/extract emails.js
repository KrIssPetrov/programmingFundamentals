function extractEmails(str) {

    let pattern = / \b[a-z]+[\.\_-]?[a-z0-9]+@[a-z]+\-?[a-z]*\.[a-z]+[^ ]+\b/gi;

    let match = pattern.exec(str);

    while (match != null) {
        console.log(match[0]);
        match = pattern.exec(str)
    }

}
//extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')