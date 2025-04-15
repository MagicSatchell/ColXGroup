interface ProductHeaderProps {
  productName: string
  productSubtitle: string
  description: string
}

export default function ProductHeader({ productName, productSubtitle, description }: ProductHeaderProps) {
  return (
    <div className="bg-[#0c1a2d] py-8 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="relative mr-4">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-[#3CAEA3]"></div>

            {/* Triangle logo */}
            <div className="ml-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 15L15 30L30 45L45 15Z" stroke="#3CAEA3" strokeWidth="4" fill="#3CAEA3" fillOpacity="0.2" />
              </svg>
            </div>
          </div>

          <div>
            <h1 className="text-white text-3xl md:text-4xl font-medium">
              {productName}
              <span className="text-[#3CAEA3] ml-2">{productSubtitle}</span>
            </h1>
            <p className="text-white text-lg md:text-xl mt-2 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
