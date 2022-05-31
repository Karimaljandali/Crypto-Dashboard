const RowInfo = ({ title, link, tag }) => {
  return (
      <div className="flex justify-between items-center font-bold">
        <span className="font-lg ">{title}</span>
        <a 
          href={link} 
          target="_blank" 
          className="p-2 bg-slate-700 hover:bg-slate-600 focus:bg-slate-600 rounded-lg font-bold font-md"
        >
          {tag}
        </a>
      </div>
  )
}

export default RowInfo