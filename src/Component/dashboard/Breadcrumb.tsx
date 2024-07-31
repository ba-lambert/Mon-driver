import { Link } from 'react-router-dom';
interface BreadcrumbProps {
    pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
    return (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-black text-sm dark:text-blue-800">
                {pageName}
            </h2>

            <nav>
                <ol className="flex items-center gap-2 text-sm">
                    <li>
                        <Link className="font-medium" to="/dashboard">
                            Dashboard /
                        </Link>
                    </li>
                    <li className="font-medium text-primary dark:text-blue-900">{pageName}</li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
