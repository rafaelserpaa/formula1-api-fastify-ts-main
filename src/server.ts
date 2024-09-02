import fastify from "fastify";
import { Routes } from "./routes/routes";
import { repoDrivers, repoTeams } from "./services/get-drivers-teams";
import IdParams from "./models/id-model";
import cors from "@fastify/cors";
import Driver from "./models/driver-model";
import Team from "./models/team-model";

const server = fastify()

server.register(cors, {
    origin: "*",
});

server.get(Routes.TEAMS, async (_req, res) => {
    res.type("application/json").code(200);
    return await repoTeams();
});

server.get(Routes.DRIVERS, async (_req, res) => {
    res.type("application/json").code(200);
    return await repoDrivers();
});

server.get<{Params: IdParams}>(Routes.DRIVERS + "/:id", async (req, res) => {
    const driversList: Driver[] = await repoDrivers()
    
    const id = parseInt(req.params.id)
    const driver = driversList.find(driver => driver.id === id)

    if(!driver){
        res.type("application/json").code(404)
        return {message: "Driver Not Found"}
    }

    res.type("application/json").code(200)
    return { driver }
})

server.get<{Params: IdParams}>(Routes.TEAMS + "/:id", async (req, res) => {
    const teamsList: Team[] = await repoTeams()
    
    const id = parseInt(req.params.id)
    const team = teamsList.find((team) => team.id === id)

    if(!team){
        res.type("application/json").code(404)
        return {message: "Team Not Found"}
    }

    res.type("application/json").code(200)
    return { team }
})

server.listen({port: 3000}, () => {
    console.log(`Servidor iniciado`)
})