export default function UserList({userName, email}:{userName:string, email:string}) {
  return (
    <div>
        
        <div>
            <p>{userName}</p>
            <p>{email}</p>
        </div>
    </div>
  )
}