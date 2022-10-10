export default function Message({ children, avatar, username, description }) {
  return (
    <div className="bg-white drop-shadow-xl p-8 border-2 rounded-lg my-4">
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-10 rounded-full" />
        <h2 className="font-bold">{username}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
