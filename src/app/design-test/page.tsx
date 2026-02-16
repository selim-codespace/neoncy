import TechStackGrid from "@/components/tech-stack-grid/tech-stack-grid";

export default function DesignTestPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-full">
                <h1 className="text-white text-center text-3xl mb-10 font-bold">Tech Stack Grid Design Test</h1>
                <TechStackGrid />
            </div>
        </div>
    );
}
