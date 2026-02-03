class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
class BinarySearchTree:
    def __init__(self):
        self.root = None
    def insert(self, data):
        self.root = self._insert(self.root, data)
    def _insert(self, root, data):
        if root is None:
            return Node(data)
        if data < root.data:
            root.left = self._insert(root.left, data)
        elif data > root.data:
            root.right = self._insert(root.right, data)
        return root
    def search(self, data):
        return self._search(self.root, data)
    def _search(self, root, data):
        if root is None:
            return False
        if root.data == data:
            return True
        elif data < root.data:
            return self._search(root.left, data)
        else:
            return self._search(root.right, data)
    def inorder(self):
        self._inorder(self.root)
    def _inorder(self, root):
        if root:
            self._inorder(root.left)
            print(root.data, end=" ")
            self._inorder(root.right)
    def preorder(self):
        self._preorder(self.root)
    def _preorder(self, root):
        if root:
            print(root.data, end=" ")
            self._preorder(root.left)
            self._preorder(root.right)
    def postorder(self):
        self._postorder(self.root)
    def _postorder(self, root):
        if root:
            self._postorder(root.left)
            self._postorder(root.right)
            print(root.data, end=" ")
bst = BinarySearchTree()
n = int(input("Enter number of elements: "))
for i in range(n):
    val = int(input(f"Enter value {i+1}: "))
    bst.insert(val)
print("Inorder Traversal:")
bst.inorder()
print("\nPre order")
bst.preorder()
print("\nPost order")
bst.postorder()
key = int(input("\nEnter element to search: "))
if bst.search(key):
    print("Element found")
else:
    print("Element not found")
