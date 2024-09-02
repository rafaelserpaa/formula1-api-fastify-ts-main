import fs from "fs";
import path from "path";
import Team from "../models/team-model";
import Driver from "../models/driver-model";

export const repoDrivers = async (): Promise<Driver[]> => {
    const pathData = path.join(__dirname, '../data/drivers.json')
    const rawData = fs.readFileSync(pathData, 'utf-8')

    const jsonFile = JSON.parse(rawData)

    return jsonFile
}

export const repoTeams = async (): Promise<Team[]> => {
    const pathData = path.join(__dirname, '../data/teams.json')
    const rawData = fs.readFileSync(pathData, 'utf-8')

    const jsonFile = JSON.parse(rawData)

    return jsonFile
}