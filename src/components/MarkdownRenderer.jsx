import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ filepath }) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(filepath)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [filepath]);

    return (
        <ReactMarkdown
            className="prose"
            components={{
                p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
                li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                code: ({ node, inline, className, children, ...props }) =>
                    inline ? (
                        <code className="px-1 bg-gray-200 rounded">{children}</code>
                    ) : (
                        <pre className="bg-gray-200 p-4 rounded-md overflow-auto">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
                    ),
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 pl-4 italic border-gray-300 mb-4" {...props} />,
                hr: ({ node, ...props }) => <hr className="my-6" {...props} />,
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-4" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mb-4" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-lg font-medium mb-4" {...props} />,
                h5: ({ node, ...props }) => <h5 className="text-base font-medium mb-4" {...props} />,
                h6: ({ node, ...props }) => <h6 className="text-sm font-medium mb-4" {...props} />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
