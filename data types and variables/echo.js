function echo(echo) {
    let type = typeof (echo);
    console.log(type);

    if (type == 'string' || type == 'number') {
        console.log(echo);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}
echo('Hello, JavaScript!');
echo(18);
echo(null);