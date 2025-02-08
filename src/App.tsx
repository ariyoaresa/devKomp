import React, { useState } from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { TypewriterEffect } from './components/TypewriterEffect';
import { ComponentCard } from './components/ComponentCard';
import { Toast } from './components/Toast/Toast';
import { Spinner } from './components/Spinner';
import { Modal } from './components/Modal/Modal';
import { Tooltip } from './components/Tooltip/Tooltip';
import { useToast } from './components/Toast/useToast';
import { Switch } from './components/Switch/Switch';
import { Badge } from './components/Badge/Badge';
import { Accordion, AccordionItem } from './components/Accordion/Accordion';
import { Popover } from './components/Popover/Popover';
import { ImageLightbox } from './components/ImageLightbox/ImageLightbox';
import { InfiniteScroll } from './components/InfiniteScroll/InfiniteScroll';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const { addToast } = useToast();

  const components = [
    {
      title: "Typewriter Effect",
      description: "A smooth typewriter effect that types out text character by character",
      code: `import { TypewriterEffect } from './components/TypewriterEffect';

<TypewriterEffect 
  text="Hello, World!" 
  speed={100} 
  delay={1000} 
/>`,
      preview: (
        <div className="h-20 flex items-center justify-center">
          <TypewriterEffect text="Hello, World!" speed={100} delay={1000} />
        </div>
      )
    },
    {
      title: "Toast Notifications",
      description: "Customizable toast notifications with different types and auto-dismiss",
      code: `import { useToast } from './components/Toast/useToast';

const { addToast } = useToast();

// Show different types of toasts
addToast({ message: 'Success!', type: 'success' });
addToast({ message: 'Error!', type: 'error' });
addToast({ message: 'Info', type: 'info' });`,
      preview: (
        <div className="space-x-2">
          <button
            onClick={() => addToast({ message: 'Success!', type: 'success' })}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Show Success
          </button>
          <button
            onClick={() => addToast({ message: 'Error!', type: 'error' })}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Show Error
          </button>
        </div>
      )
    },
    {
      title: "Loading Spinners",
      description: "Multiple spinner types with customizable sizes and colors",
      code: `import { Spinner } from './components/Spinner';

// Different types
<Spinner type="circle" />
<Spinner type="dots" />
<Spinner type="bars" />
<Spinner type="pulse" />

// Customization
<Spinner type="circle" size="lg" color="text-blue-500" />`,
      preview: (
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-2">
              <Spinner type="circle" />
              <span className="text-sm text-gray-600">Circle</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner type="dots" />
              <span className="text-sm text-gray-600">Dots</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner type="bars" />
              <span className="text-sm text-gray-600">Bars</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner type="pulse" />
              <span className="text-sm text-gray-600">Pulse</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Modal Dialog",
      description: "Accessible modal dialog with backdrop and keyboard support",
      code: `import { Modal } from './components/Modal';

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Modal Title"
>
  <p>Modal content goes here</p>
</Modal>`,
      preview: (
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Open Modal
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
            <p>This is an example modal dialog. Click the X or press ESC to close.</p>
          </Modal>
        </div>
      )
    },
    {
      title: "Tooltip",
      description: "Simple tooltip component with multiple positions",
      code: `import { Tooltip } from './components/Tooltip';

<Tooltip content="Tooltip content" position="top">
  <button>Hover me</button>
</Tooltip>`,
      preview: (
        <div className="flex gap-4 justify-center">
          <Tooltip content="Top tooltip" position="top">
            <button className="px-4 py-2 bg-gray-200 rounded">Top</button>
          </Tooltip>
          <Tooltip content="Bottom tooltip" position="bottom">
            <button className="px-4 py-2 bg-gray-200 rounded">Bottom</button>
          </Tooltip>
        </div>
      )
    },
    {
      title: "Switch Toggle",
      description: "A beautiful toggle switch with different sizes and states",
      code: `import { Switch } from './components/Switch';

<Switch
  checked={checked}
  onChange={setChecked}
  size="md"
  label="Toggle me"
/>`,
      preview: (
        <div className="flex flex-col gap-4">
          <Switch checked={switchOn} onChange={setSwitchOn} label="Toggle me" />
          <div className="flex gap-4">
            <Switch checked={switchOn} onChange={setSwitchOn} size="sm" />
            <Switch checked={switchOn} onChange={setSwitchOn} size="md" />
            <Switch checked={switchOn} onChange={setSwitchOn} size="lg" />
          </div>
        </div>
      )
    },
    {
      title: "Badges",
      description: "Status indicators and labels with different variants",
      code: `import { Badge } from './components/Badge';

<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="warning" rounded>Warning</Badge>`,
      preview: (
        <div className="flex gap-2 flex-wrap">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info" rounded>Info</Badge>
        </div>
      )
    },
    {
      title: "Accordion",
      description: "Collapsible content sections for organizing information",
      code: `import { Accordion, AccordionItem } from './components/Accordion';

<Accordion>
  <AccordionItem title="Section 1">
    Content for section 1
  </AccordionItem>
  <AccordionItem title="Section 2">
    Content for section 2
  </AccordionItem>
</Accordion>`,
      preview: (
        <Accordion>
          <AccordionItem title="What is this?">
            This is an accordion component that helps organize content into collapsible sections.
          </AccordionItem>
          <AccordionItem title="How to use?">
            Simply wrap your content in AccordionItem components within an Accordion.
          </AccordionItem>
        </Accordion>
      )
    },
    {
      title: "Popover",
      description: "Contextual overlays triggered by user interaction",
      code: `import { Popover } from './components/Popover';

<Popover
  trigger={<button>Click me</button>}
  content="Popover content"
  position="bottom"
/>`,
      preview: (
        <div className="flex justify-center">
          <Popover
            trigger={
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Click me
              </button>
            }
            content={
              <div>
                <h3 className="font-semibold mb-2">Popover Title</h3>
                <p>This is the popover content.</p>
              </div>
            }
          />
        </div>
      )
    },
    {
      title: "Image Lightbox",
      description: "Full-screen image viewer with navigation",
      code: `import { ImageLightbox } from './components/ImageLightbox';

const images = [
  { src: "image1.jpg", alt: "Image 1" },
  { src: "image2.jpg", alt: "Image 2" }
];

<ImageLightbox images={images} />`,
      preview: (
        <ImageLightbox
          images={[
            {
              src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
              alt: "Nature 1"
            },
            {
              src: "https://images.unsplash.com/photo-1729398450319-d82ce1579ec6",
              alt: "Nature 2"
            }
            {
              src: "https://images.unsplash.com/photo-1592079927444-590c17e87f28",
              alt: "Nature 3"
            }
          ]}
        />
      )
    },
    {
      title: "Infinite Scroll",
      description: "Automatically load more content as user scrolls",
      code: `import { InfiniteScroll } from './components/InfiniteScroll';

<InfiniteScroll
  loadMore={loadMoreItems}
  hasMore={hasMoreItems}
>
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</InfiniteScroll>`,
      preview: (
        <div className="h-48 overflow-auto">
          <InfiniteScroll
            loadMore={async () => {
              await new Promise(resolve => setTimeout(resolve, 1000));
            }}
            hasMore={true}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-4 border-b">
                Scroll item {i + 1}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">DevComponents</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-indigo-600" />
            Beautiful Components for Developers
          </h2>
          <p className="text-xl text-gray-600">
            Copy, paste, and create amazing experiences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component, index) => (
            <ComponentCard key={index} {...component} />
          ))}
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            Built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
