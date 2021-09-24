const Post = (props) => {
  const { id, user_id, title, due_on, status } = props.data;
  return (
    <div className="ring-4 rounded-lg p-3 font-medium">
      <p>{user_id}</p>
      <h1>{title}</h1>
      <p className="text-red-500">
        {new Date(due_on).toLocaleDateString("en-US")}
      </p>
      <p className={status === "pending" ? "text-red-500" : "text-green-800"}>
        {status}
      </p>
    </div>
  );
};

// "id": 17,
// "user_id": 14,
// "title": "Vicinus id absque talio cultellus vetus capillus chirographum explicabo addo.",
// "due_on": "2021-10-10T00:00:00.000+05:30",
// "status": "pending"

export default Post;
