type dataProps = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  
 export type TodosListProps = {
    data: dataProps[];
  };
  
  export default function TodosList({data}: TodosListProps) {
    return (
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  