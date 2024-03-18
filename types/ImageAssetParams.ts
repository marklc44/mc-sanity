import { FixedSizeArray } from "./Arrays"

export interface ImageAssetParams {
  width?: number | undefined
  height?: number | undefined
  focalPoint?: FixedSizeArray<2, number> | undefined
  blur?: number | undefined
  rect?: FixedSizeArray<4, number> | undefined
  crop?: CropMode | undefined
}

enum CropMode {
  top,
  bottom,
  left,
  right,
  center,
  focalpoint,
  entropy
}
