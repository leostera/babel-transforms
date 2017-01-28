export default ({ types: t }) => ({
  visitor: {
    AssignmentExpression: (path) => {
      const {
        left,
        right,
      } = path.container.expression
      path.parentPath.replaceWith(
        t.variableDeclaration('const',
          [t.variableDeclarator(left, right)]))
    }
  }
})
