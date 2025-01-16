class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  search(word) {
    currentNode = this.root;

    for (let i of word) {
      if (currentNode.children[i]) {
        currentNode = currentNode.children[i];
      } else {
        return false;
      }
    }
    return currentNode;
  }

  insert(word) {
    currentNode = this.root;

    for (let i of word) {
      if (currentNode.children[i]) {
        currentNode = currentNode.children[i];
      } else {
        currentNode.children[i] = new TrieNode();
        currentNode = currentNode.children[i]
      }
    }
    currentNode.children['*'] = null;
  }

  collectAllWords(node=null, word='', words=[]){
    currentNode = node || this.root;

    for (let [key, childNode] of Object.entries(currentNode.children)){
      if (key === '*'){
        words.push(word);
      }else{
        this.collectAllWords(childNode, word + key, words);
      }
    }
    return words;
  }

  autocomplete(prefix) {
    currentNode = this.search(prefix);

    if(!currentNode) return null;
    return this.collectAllWords(currentNode, prefix);
  }
}

// let a = new Trie();

// console.log(a.root.children); // {}
