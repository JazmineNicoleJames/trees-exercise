/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;
    let min = Infinity;

    const DFS = (node, path) => {
      if(!node.left && !node.right){
        min = Math.min(min, path)
      }
      if(node.left){
        DFS(node.left, path +1)
      }
      if(node.right){
        DFS(node.right, path +1)
      }
    }
    DFS(this.root, 1)
    return min;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;
    let max = 0;

    const DFS = (node, path) => {
      if(!node.left && !node.right){
        max = Math.max(max, path)
      }
      if(node.left){
        DFS(node.left, path +1)
      }
      if(node.right){
        DFS(node.right, path +1)
      }
    }
    DFS(this.root, 1)
    return max;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root) return 0;
    let sum = 0;

    const DFS = (node) => {
      if(!node) return 0;
  
      const leftSum = Math.max(DFS(node.left), 0)
      const rightSum = Math.max(DFS(node.right), 0)
      sum = Math.max(sum, node.val + leftSum + rightSum)
      return node.val + Math.max(leftSum, rightSum)
    }
    DFS(this.root)
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;
    let val = null;

    const smallestVal = (node) => {
      if(!node) return null;

      if(node.val > lowerBound){
        if(!val || node.val < val){
          val = node.val;
        }

      }
        if(node.val > lowerBound){
          smallestVal(node.left)
        }
      smallestVal(node.right)
        
    }
    smallestVal(this.root)
    return val;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    let result = false;
    const checkCousin = (node) => {
      if(node.left && node.right){
        let parent1 = node.left;
        let parent2 = node.right;
        if(parent1.left === node1 || parent1.right === node1){
          if(parent2.left === node2 || parent2.right === node2){
            result=true;
        }
      }
      }
    }
    checkCousin(this.root);
    return result;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
