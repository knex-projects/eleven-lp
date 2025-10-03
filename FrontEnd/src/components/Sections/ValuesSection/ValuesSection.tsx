export default function ValuesSection() {
  return (
    <section className="w-screen h-[875px] flex flex-col items-center justify-center gap-10 mb-6 bg-background">
      <h1 className="text-5xl font-bold text-[#0F143B]">Nossos Valores</h1>
      <div className="h-[480px] w-[60%] grid grid-cols-3">
        <div className="bg-[#D9D9D9]">
          <p>1</p>
        </div>
        <div className="bg-[#131845]">
          <p>2</p>
        </div>
        <div className="bg-[#571818]">
          <p>3</p>
        </div>
      </div>
    </section>
  );
}
