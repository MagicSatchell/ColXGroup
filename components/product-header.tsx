interface ProductHeaderProps {
  productName: string
  productSubtitle: string
  description: string
}

export default function ProductHeader({ productName, productSubtitle, description }: ProductHeaderProps) {
  return (
    <div className="bg-[#0c1a2d] py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="relative mr-3">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-[#3CAEA3]"></div>

            {/* Triangle logo */}
            <div className="ml-3">
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 15L15 30L30 45L45 15Z" stroke="#3CAEA3" strokeWidth="4" fill="#3CAEA3" fillOpacity="0.2" />
              </svg>
            </div>
          </div>

          <div>
            <h1 className="text-white text-2xl md:text-3xl font-medium">
              {productName}
              <span className="text-[#3CAEA3] ml-2">{productSubtitle}</span>
            </h1>
            <p className="text-white text-sm md:text-base mt-1 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
