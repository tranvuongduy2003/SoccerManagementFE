export interface ISponsor {
  _id?: string;
  name: string;
  image: string;
  logo: string;
  email: string;
}

export const InitSponsor = {
  name: '',
  image: '',
  logo: '',
  email: ''
} as ISponsor;
