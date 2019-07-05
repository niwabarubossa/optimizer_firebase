// (1) 9
    // 7
struct n{
    int value,
    struct n *left,
    struct n *right
}
void pre_order_traverse(struct node * n)(
    struct node *n;
    printf("%d",n->value);
    pre_order_traverse(n->left);
    pre_order_traverse(n->right);
)
void post_order_traverse(struct node * n)(
    struct node *n
)
struct node *insert(struct node *top, int value)
{
    if (top == NULL)
    return (new_node(value, NULL, NULL));
    if (value < top->value )
        top = insert( top->left,value );
    else
        top = insert( top->right,value );
    return (top);
}