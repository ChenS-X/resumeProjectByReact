import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export default function imageOptimizer(options = {}) {
    const {
        quality = 80,
        webpQuality = 75,
        include = /\.(png|jpe?g|gif|svg|tiff|bmp)$/i,
        exclude,
        enableWebp = true,
        enableCompress = true,
    } = options

    return {
        name: 'vite-plugin-image-optimizer',
        apply: 'build',
        async generateBundle(options, bundle) {
            console.log(
                '🚀 vite-plugin-image-optimizer: 开始处理图片...'
            )
            const sharp = await import('sharp')

            for(const [fileName, bundleInfo] of Object.entries(bundle)) {
                // console.log(bundleInfo.type !== 'assets')
                // if(bundleInfo.type !== 'assets') continue

                // 检查类型
                if(!include.test(fileName) || exclude?.test(fileName)) continue

                try {
                    const source = bundleInfo.source
                    if(enableCompress) {
                        // 压缩图片
                        const compressBuffer = await sharp.default(source).jpeg({ quality }).png({ quality }).toBuffer()

                        bundleInfo.source = compressBuffer
                    }

                    if(enableWebp) {
                        // 生成webp版本
                        const webpBuffer = await sharp.default(source).webp({ quality: webpQuality }).toBuffer()

                        // 添加webp版本到bundle
                        const webpFileName = fileName.replace(include, '.webp')
                        this.emitFile({
                            type: 'asset',
                            fileName: webpFileName,
                            source: webpBuffer
                        })
                        

                    }
                } catch (error) {
                    console.warn(`处理图片${fileName}时出错：`, error)
                }
            }
        }
    }
}