function wordsTracker(input) {
    let wordsToSearch = input.shift().split(' ');
    let tracker = {};

    for (let index of wordsToSearch) {
        tracker[index] = 0;
    }

    for (let word of input) {

        if (word in tracker) {
            tracker[word]++;
        }
    }

    let entrie = Object.entries(tracker).sort((a, b) => b[1] - a[1]);

    entrie.forEach(entrie => console.log(entrie.join(' - ')));

}
wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])