import fotoBruno from '../assets/foto-bruno2.jpeg'
import { Abilities } from './Abilities'
import { Card, CardContent } from './ui/card'
export function About() {
  return (
    <div className="flex justify-center items-center">
      <Card className="max-w-[22rem] lg:max-w-[30rem] ">
        <CardContent className="space-y-2">
          <div className="flex justify-center w-full p-10">
            <img
              className="rounded-md object-cover max-w-72"
              src={fotoBruno}
              alt=""
            />
          </div>
          <div>
            <p className="font-tilt-warp text-xs lg:text-2xl">Bruno Fröhlich</p>
            <p className="font-medium text-base">04/02/2006</p>
            <p className="font-medium text-base">Maratá, RS</p>
            <p className="font-medium text-base">
              Análise e desenvolvimento de sistemas
            </p>
          </div>
          <Abilities />
        </CardContent>
      </Card>
    </div>
  )
}
