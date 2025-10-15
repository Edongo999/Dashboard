const UserAvatar = () => {
  return (
    <div className="relative">
      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
        TS
      </div>
      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-500" />
    </div>
  )
}

export default UserAvatar
