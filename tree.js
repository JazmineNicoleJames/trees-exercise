/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree.
   */

  sumValues() {
    if(!this.root) return 0;
    let sum = 0;

    const sumTree = (node) => {
      sum += node.val;
      for(let child of node.children){
        sumTree(child)
      }
  }
  sumTree(this.root);
  return sum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;

    let evens = 0;
    const evenNum = (node) => {
      for(let child of node.children){
        if(child.val === null){
          return;
        }
        if(child.val % 2 === 0){
          evens += 1
        }
        evenNum(child);
      }
    }
    evenNum(this.root)
    return evens;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;
    const num = (node) => {
      for(let child of node.children){
        console.log('child', child)
        console.log('childval', child.val)
        if(child.val > lowerBound){
          count += 1;
          console.log('count', count)
        }
        num(child)
    }
  }
    num(this.root)
    return count;
  }
}

module.exports = { Tree, TreeNode };
