const renderContent = (value) => {
  const obj = { children: value, props: {} };
  return obj;
};

export const columns = () => {
  return [
    {
      title: 'Name', dataIndex: 'name', width: 100, render: renderContent,
    },
    {
      title: 'Age', dataIndex: 'age', render: renderContent, width: 100,
    },
    {
      title: 'Home', dataIndex: 'tel', render: renderContent, width: 100,
    },
    {
      title: 'Phone', dataIndex: 'phone', render: renderContent, width: 100,
    },
    {
      title: 'Address', dataIndex: 'address', render: renderContent, width: 100,
    },
  ];
};
