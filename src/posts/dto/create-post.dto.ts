export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  // TODO: get this userId from token in feauter
  readonly userId: number;
}
