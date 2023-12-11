const transformData = (inputData, nodeName) => {
  const node = inputData[nodeName];

  if (!node) {
    return null;
  }

  const transformedNode = {
    name: (
      <>
        <h4>{node.name}</h4>
        <h4>{node.data}</h4>
      </>
    ),
    children: [],
    first_key: true,
  };

  if (node.children && node.children.length > 0) {
    transformedNode.children = node.children.map((childName) =>
      transformData(inputData, childName)
    );
  }

  return transformedNode;
};

export { transformData };
